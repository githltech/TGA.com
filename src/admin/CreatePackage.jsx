import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { createPackage } from "../redux/packageSlice"; // Replace with your slice path
import MetaData from "../components/layout/Metadata";
import SideBar from "./Sidebar";

const CreatePackage = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.packages);

  // State for form data
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    days: "",
    description: "", // Added field
    location: "", // Added field
    imgtext: "",
    reviews: "",
    rating: "",
    originalPrice: "",
    saveprice: "",
    includedServices: "", // Added field
  });

  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
          setImagePreview((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const packageData = { ...formData, images };

    try {
      await dispatch(createPackage(packageData)).unwrap();
      alert.success("Package created successfully!");
      navigate("/admin/dashboard");
    } catch (err) {
      alert.error(error || "Something went wrong!");
    }
  };

  return (
    <>
      <MetaData title="Create Product" />
      <div className="flex flex-col sm:flex-row bg-gray-100">
        <SideBar />
        <div className="flex-grow p-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg p-4 max-w-lg mx-auto border border-gray-400"
            encType="multipart/form-data"
          >
            <h1 className="text-2xl font-bold text-gray-700 mb-6">
              Create Package
            </h1>

            {/* Title */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-2"
                required
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-2"
                required
              />
            </div>

            {/* Price */}
            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-2"
                required
              />
            </div>

            {/* Days */}
            <div className="mb-4">
              <label htmlFor="days" className="block text-gray-600">
                Days
              </label>
              <input
                type="text"
                id="days"
                name="days"
                value={formData.days}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-2"
                required
              />
            </div>

            {/* Location */}
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-2"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-2"
              />
            </div>

            {/* Included Services */}
            <div className="mb-4">
              <label htmlFor="includedServices" className="block text-gray-600">
                Included Services
              </label>
              <textarea
                id="includedServices"
                name="includedServices"
                value={formData.includedServices}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-2"
              />
            </div>

            {/* Images */}
            <div className="mb-4">
              <label htmlFor="images" className="block text-gray-600">
                Images
              </label>
              <input
                type="file"
                id="images"
                name="images"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="border border-gray-300 rounded-md w-full p-2"
              />
              <div className="mt-2 flex flex-wrap gap-2">
                {imagePreview.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Preview"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary hover:bg-secondary text-white p-2 rounded-md w-full"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Package"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePackage;
