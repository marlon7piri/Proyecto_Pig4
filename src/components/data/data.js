let idRandom=Date.now()
import {v4 as uuid} from 'uuid';


export const mesas = [
  {
    id: 72,
    numero: 72,
    capacidad: 4,
    imagen: "public/imagenes P-PiG4/mesa.png",
  },
  {
    id: 73,
    numero: 73,
    capacidad: 6,
    imagen: "public/imagenes P-PiG4/mesa.png",
  },
  {
    id: 27,
    numero: 27,
    capacidad: 3,
    imagen: "public/imagenes P-PiG4/mesa.png",
  },
  {
    id: 20,
    numero: 20,
    capacidad: 6,
    imagen: "public/imagenes P-PiG4/mesa.png",
  },
  {
    id: 14,
    numero: 14,
    capacidad: 2,
    imagen: "public/imagenes P-PiG4/mesa.png",
  },
  {
    id: 13,
    numero: 13,
    capacidad: 2,
    imagen: "public/imagenes P-PiG4/mesa.png",
  },
  {
    id: 12,
    numero: 12,
    capacidad: 2,
    imagen: "public/imagenes P-PiG4/mesa.png",
  },
  {
    id: 26,
    numero: 26,
    capacidad: 8,
    imagen: "public/imagenes P-PiG4/mesa.png",
  },
  {
    id: 24,
    numero: 24,
    capacidad: 4,
    imagen: "public/imagenes P-PiG4/mesa.png",
  },
  {
    id: 22,
    numero: 22,
    capacidad: 3,
    imagen: "public/imagenes P-PiG4/mesa.png",
  },
  {
    id: 21,
    numero: 21,
    capacidad: 5,
    imagen: "public/imagenes P-PiG4/mesa.png",
  },
];


export const jugos = [
  { id: uuid(), nombreJugos: "Mango",precio:3.50,descripcion:"" },
  { id: uuid(), nombreJugos: "Maracuya" ,precio:3.50,descripcion:""},
  { id: uuid(), nombreJugos: "Limonada Sencilla",precio:3.50 ,descripcion:""},
  { id: uuid(), nombreJugos: "Limonada Hierbabuena",precio:3.50 ,descripcion:""},
  { id: uuid(), nombreJugos: "Limonada con Coco",precio:3.50 ,descripcion:""},
];

export const energizantes = [
  { id: uuid(), nombre: "Red Bull regular",precio:1.50,descripcion:"" },
  { id: uuid(), nombre: "Red Bull Sandia",precio:1.75,descripcion:"" },
  { id: uuid(), nombre: "Red Bull Tropical",precio:1.40 ,descripcion:""},
];

export const cocteles = [
  { id: uuid(), nombre: "Bunny Fizz",precio:12.00,descripcion:"" },
  { id: uuid(), nombre: "Como Ayer",precio:12.00 ,descripcion:""},
  { id: uuid(), nombre: "Flamenco",precio:14.00 ,descripcion:""},
  { id: uuid(), nombre: "Mulata",precio:12.00 ,descripcion:""},
  { id: uuid(), nombre: "Negroni Clarificado",precio:12.00 ,descripcion:""},
  { id: uuid(), nombre: "Old Cuban",precio:12.00 ,descripcion:""},
  { id: uuid(), nombre: "Palomino",precio:12.00 ,descripcion:""},
  { id: uuid(), nombre: "Penicilin",precio:12.00 ,descripcion:""},
  { id: uuid(), nombre: "Punta Gallina",precio:14.00 ,descripcion:""},
  { id: uuid(), nombre: "Red Sea",precio:12.00 ,descripcion:""},
  { id: uuid(), nombre: "Tulum",precio:14.00 ,descripcion:""},
];

export const entradas = [
  { id: uuid(), nombre: "Camaron Sweet Spicy",precio:12.90,descripcion:""},
  { id: uuid(), nombre: "Gyozas Tableñas" ,precio:9.00,descripcion:""},
  { id: uuid(), nombre: "Montadito de Salmon",precio:13.00,descripcion:"" },
  { id: uuid(), nombre: "Olivar de Pulpo",precio:15.00,descripcion:"" },
  { id: uuid(), nombre: "Passion Fruit Ceviche",precio:14.00,descripcion:"" },
  { id: uuid(), nombre: "Puerquito",precio:12.00,descripcion:"" },
  { id: uuid(), nombre: "Tiradito de Atun",precio:12.00,descripcion:"" },
  { id: uuid(), nombre: "Tiradito Yellow",precio:12.00,descripcion:"" },
  { id: uuid(), nombre: "Piqueo Mixto",precio:16.90,descripcion:"" },
  { id: uuid(), nombre: "Guacamole de la Casa",precio:10.00,descripcion:"" },
  { id: uuid(), nombre: "Guacamole de Carne",precio:14.50,descripcion:"" },
  { id: uuid(), nombre: "Guacamole de Camaron",precio:12.00,descripcion:"" },
  { id: uuid(), nombre: "Tacos Cochinita Pibil",precio:13.00,descripcion:"" },
  { id: uuid(), nombre: "Tacos Suadero",precio:12.00,descripcion:"" },
 
];

export const principales = [
  { id: uuid(), nombre: "Entraña",precio:29.00,descripcion:"" },
  { id: uuid(), nombre: "New York",precio:32.00 ,descripcion:""},
  { id: uuid(), nombre: "Ribeye",precio:38.00,descripcion:"" },
  { id: uuid(), nombre: "Arroz Cremoso",precio:17.00,descripcion:"" },
  { id: uuid(), nombre: "Arroz de Mariscos",precio:19.00,descripcion:"" },
  { id: uuid(), nombre: "Pulpo a la Brasa",precio:25.00,descripcion:"" },
  { id: uuid(), nombre: "Robalo Braseado",precio:20.00,descripcion:"" },
  { id: uuid(), nombre: "Salmon Poblano",precio:20.00,descripcion:"" },
  { id: uuid(), nombre: "Solomillo de Res",precio:23.00,descripcion:"" },
];

export const postres = [
  { id: uuid(), nombre: "4 Milk y Moccacino",precio:7.50 ,descripcion:""},
  { id: uuid(), nombre: "Pa la niña",precio:7.50 ,descripcion:""},
];
