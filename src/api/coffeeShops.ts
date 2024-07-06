import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface CoffeeShop {
	_id: string;
	name: string;
	location: string;
	imageurl: string;
	rating: number;
	reviews: number;
	distance: number;
	//products: Product[];
}

export interface Product {
	id: string;
	name: string;
	price: number;
	description: string;
	img: string;
}

export const getCoffeeShops = async (): Promise<CoffeeShop[]> => {
	const response = await axios.get(`${API_URL}/coffee-shops`);
	return response.data.data;
};

export const getCoffeeShop = async (id: string): Promise<CoffeeShop> => {
	const response = await axios.get(`${API_URL}/coffee-shops/${id}`);
	return response.data.data;
};
