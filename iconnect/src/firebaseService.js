// src/firebaseService.js
import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Function to add product
export const addProduct = async (product) => {
  try {
    await addDoc(collection(db, "products"), product);
    console.log("Product added successfully!");
  } catch (e) {
    console.error("Error adding product: ", e);
  }
};

// Function to fetch products
export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  } catch (e) {
    console.error("Error fetching products: ", e);
  }
};
