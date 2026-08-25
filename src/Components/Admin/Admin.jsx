import React, { useEffect, useState } from 'react'

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
  });

    const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    const saveProduct = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(saveProduct);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setFormData({
        ...formData,
        image: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  const addProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      ...formData,
    };
  
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setFormData({
      title: "",
      price: "",
      image: "",
      category: "",
    });
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
    }, 3000);
  }

    const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <>
      <div className= "container mx-auto p-10">
        <h1 className= "text-4xl font-bold mb-10 text-center">
          Admin Dashboard
        </h1>
        {successMessage && (
          <div role="alert" className="alert alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Product added successfully!</span>
        </div>
        )}
        <form 
        onSubmit= {addProduct}
        className= "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <input
            type= "text"
            name= "title"
            placeholder= "Product Title"
            value= {formData.title}
            onChange= {handleChange}
            className= "input input-bordered"
          />
          <input
            type= "number"
            name= "price"
            placeholder= "Product Price"
            value= {formData.price}
            onChange= {handleChange}
            className= "input input-bordered"
          />
          <input
            type= "file"
            accept= "image/*"
            onChange= {handleImageChange}
            className= "file-input file-input-bordered"
            />
          {/* <input
            type= "text"
            name= "image"
            placeholder= "Image URL"
            value= {formData.image}
            onChange= {handleChange}
            className= "input input-bordered"
          /> */}
          <input
            type= "text"
            name= "category"
            placeholder= "Category"
            value= {formData.category}
            onChange= {handleChange}
            className= "input input-bordered"
          />



          <button className= "btn btn-primary md:col-span-2 lg:col-span-1">
            Add Product
            </button> 
        </form>
        <div className= "overflow-x-auto mt-10 shadow-lg rounded-lg">
          <table className= "table table-zebra w-full ">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key= {product.id}>
                  <td>
                    <img src= {product.image}
                    alt= ""
                    className= "w-20 h-20 object-cover rounded-lg"
                    />
                  </td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>
                      <button
                        className= "btn btn-error btn-sm"
                        onClick= {() => deleteProduct(product.id)}
                        >
                          Delete
                        </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Admin