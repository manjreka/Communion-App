import { useState } from "react";
import LocationPicker from "./LocationPicker";
import { db } from "../Firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { Toaster, toast } from "react-hot-toast";

const timezones = Intl.supportedValuesOf
  ? Intl.supportedValuesOf("timeZone")
  : [
      "UTC",
      "America/New_York",
      "America/Los_Angeles",
      "Asia/Kolkata",
      "Europe/London",
      "Asia/Dubai",
      "Australia/Sydney",
      "Africa/Cairo",
    ];

const initialState = {
  title: "",
  format: "In Person",
  startTime: "",
  startDate: "",
  endTime: "",
  endDate: "",
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  location: { lat: "", lng: "", address: "" },
  eventType: "",
  capacity: "",
  category: "",
  description: "",
  image: null,
  visibility: "",
  hideRSVPs: false,
};

const EventForm = () => {
  const [eventData, setEventData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCategoryChange = (category) => {
    setEventData((prevData) => ({
      ...prevData,
      category, // Update the selected category
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEventData((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleTimezoneChange = (e) => {
    setEventData({
      ...eventData, // Preserve other event data
      timezone: e.target.value, // Use the selected value
    });
  };

  const handleLocationSelect = (location) => {
    setEventData((prev) => ({ ...prev, location }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!eventData.title.trim()) newErrors.title = "Event title is required.";
    if (!eventData.startDate) newErrors.startDate = "Start date is required.";
    if (!eventData.startTime) newErrors.startTime = "Start time is required.";
    if (!eventData.endDate) newErrors.endDate = "End date is required.";
    if (!eventData.endTime) newErrors.endTime = "End time is required.";
    if (!eventData.category) newErrors.category = "Category is required.";
    if (!eventData.visibility) newErrors.visibility = "Visibility is required.";
    if (!eventData.description.trim())
      newErrors.description = "Description is required.";
    else if (eventData.description.length > 1000)
      newErrors.description = "Description cannot exceed 1000 characters.";
    if (!eventData.eventType) newErrors.eventType = "Event type is required.";
    if (eventData.capacity === "Limited" && !eventData.capacity)
      newErrors.capacity = "Capacity is required for Limited events.";

    const start = new Date(`${eventData.startDate}T${eventData.startTime}`);
    const end = new Date(`${eventData.endDate}T${eventData.endTime}`);
    if (start >= end) {
      newErrors.endDate = "End date/time must be after start date/time.";
      newErrors.endTime = "End date/time must be after start date/time.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      let imageUrl = "";
      if (eventData.image) {
        const formData = new FormData();
        formData.append("file", eventData.image);
        formData.append("upload_preset", "event_present");

        const cloudinaryResponse = await fetch(
          "https://api.cloudinary.com/v1_1/dins17ov5/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!cloudinaryResponse.ok) {
          throw new Error("Failed to upload image to Cloudinary");
        }

        const cloudinaryData = await cloudinaryResponse.json();
        imageUrl = cloudinaryData.secure_url;
      }

      const newEventData = {
        ...eventData,
        image: imageUrl,
      };
      await addDoc(collection(db, "events"), newEventData);
      // alert("Event saved successfully!!");
      toast.success("Successfully created Event! 🎉", { duration: 2000 });
      setTimeout(() => {
        navigate("/events");
      }, 5000);
      setEventData(initialState);
      setLoading(false);
    } catch (err) {
      console.log(err, "error**");
      setLoading(false);
      toast.error("Something went wrong! ❌", { duration: 3000 });
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <form
        onSubmit={handleSubmit}
        className="p-4 w-[75vw] m-auto border shadow-md bg-gray-500 rounded-lg font-serif"
      >
        <h2 className="text-xl font-bold mb-4">Create Event</h2>

        <label>Event Title*</label>
        <input
          type="text"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          required
          className="w-full border p-2 mb-1"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}

        <label>Event Format*</label>
        <select
          name="format"
          value={eventData.format}
          onChange={handleChange}
          className="w-full border p-2 mb-1"
        >
          <option value="">Select Format</option>
          <option value="In Person">In Person</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Online">Online</option>
          <option value="Virtual">Virtual</option>
        </select>
        {errors.format && <p className="text-red-500">{errors.format}</p>}

        <label>Start Date and Time*</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="date"
            name="startDate"
            value={eventData.startDate}
            onChange={handleChange}
            required
            className="w-full border p-2 mb-1"
          />
          <input
            type="time"
            name="startTime"
            value={eventData.startTime}
            onChange={handleChange}
            required
            className="w-full border p-2 mb-1"
          />
        </div>
        {errors.startDate && <p className="text-red-500">{errors.startDate}</p>}
        {errors.startTime && <p className="text-red-500">{errors.startTime}</p>}

        <label>End Date and Time*</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="date"
            name="endDate"
            value={eventData.endDate}
            onChange={handleChange}
            required
            className="w-full border p-2 mb-1"
          />
          <input
            type="time"
            name="endTime"
            value={eventData.endTime}
            onChange={handleChange}
            required
            className="w-full border p-2 mb-1"
          />
        </div>
        {errors.endDate && <p className="text-red-500">{errors.endDate}</p>}
        {errors.endTime && <p className="text-red-500">{errors.endTime}</p>}

        <label>Timezone*</label>
        <select
          name="timezone"
          value={eventData.timezone}
          onChange={handleTimezoneChange}
          required
          className="w-full border p-2 mb-1"
        >
          {timezones.map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>
        {errors.timezone && <p className="text-red-500">{errors.timezone}</p>}

        <label>Location*</label>
        <LocationPicker
          className="w-full border p-2 mb-1"
          onLocationSelect={handleLocationSelect}
        />
        {errors.location && <p className="text-red-500">{errors.location}</p>}

        <label>Event Type*</label>
        <select
          name="eventType"
          value={eventData.eventType}
          onChange={handleChange}
          className="w-full border p-2 mb-1"
        >
          <option value="">Select Type</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
          <option value="Donation">Donation</option>
        </select>
        {errors.eventType && <p className="text-red-500">{errors.eventType}</p>}

        <label>Event Capacity</label>
        <select
          name="capacity"
          value={eventData.capacity}
          onChange={handleChange}
          className="w-full border p-2 mb-1"
        >
          <option value="">Select Capacity</option>
          <option value="Unlimited">Unlimited</option>
          <option value="Limited">Limited</option>
        </select>
        {errors.capacity && <p className="text-red-500">{errors.capacity}</p>}

        <label>Categories*</label>
        <div className="mb-1">
          {["Relegious", "Social", "Charity"].map((category) => (
            <label key={category} className="block">
              <input
                type="radio"
                name="category"
                checked={eventData.category === category}
                onChange={() => handleCategoryChange(category)}
              />{" "}
              {category}
            </label>
          ))}
        </div>
        {errors.category && <p className="text-red-500">{errors.category}</p>}

        <label>Description*</label>
        <textarea
          name="description"
          value={eventData.description}
          onChange={handleChange}
          maxLength={1000}
          className="w-full border p-2 mb-1"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description}</p>
        )}

        <label>Event Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full border p-2 mb-1"
        />
        {errors.image && <p className="text-red-500">{errors.image}</p>}

        {eventData.imagePreview && (
          <img
            src={eventData.imagePreview}
            alt="Preview"
            className="mb-1 max-w-xs rounded-lg shadow-md"
          />
        )}

        <label>Visibility Settings*</label>
        <select
          name="visibility"
          value={eventData.visibility}
          onChange={handleChange}
          className="w-full border p-2 mb-1"
        >
          <option value="">Select Visibility</option>
          <option value="Anyone">Anyone</option>
          <option value="Invite Only">Invite Only</option>
          <option value="Private">Private</option>
        </select>
        {errors.visibility && (
          <p className="text-red-500">{errors.visibility}</p>
        )}

        {loading && <Loader />}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 mt-4"
        >
          Create Event
        </button>
      </form>
    </>
  );
};

export default EventForm;
