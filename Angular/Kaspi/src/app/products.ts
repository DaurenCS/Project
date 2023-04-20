
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category:string;
  photo:string;
}

export interface Category{
  id:number;
  name:string;
  photoUrl:string;
}


export const products = [
  {
    id: 1,
    name: 'Iphone 14 pro Max',
    price: 712000,
    description: 'A large phone with one of the best screens 256gb',
    photo:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h82/h83/62948396662814/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg',
    category: 'Phones'
  },
  {
    id: 2,
    name: 'Iphone 14 pro',
    price: 655111,
    description: 'A great phone with one of the best cameras 256gb',
    photo:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h69/h10/63073435189278/apple-iphone-14-pro-128gb-cernyj-106363265-1.jpg',
    category: 'Phones'

  },
  {
    id: 3,
    name: 'Iphone 14',
    price: 427150,
    description: '128gb Blue',
    photo:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h93/h56/63073057112094/apple-iphone-14-128gb-goluboj-106363150-1.jpg',
    category: 'Phones'
  },
  {
    id: 4,
    name: 'Iphone 13 Pro Max',
    price: 669355,
    description: 'A great phone with one of the best cameras 128gb green',
    photo:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/he6/h64/49319418495006/apple-iphone-13-pro-max-256gb-zelenyj-104079153-1.jpg',
    category: 'Phones'
  },
  {
    id: 5,
    name: 'Iphone 13 Pro',
    price: 693995,
    description: '256gb Blue',
    photo:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h49/hf4/46393529761822/apple-iphone-13-pro-256gb-goluboj-102298652-1-Container.jpg',
    category: 'Phones'
  },
  {
    id: 6,
    name: 'Iphone 13',
    price: 380700,
    description: '128gb Midnight',
    photo:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc2/h05/46392662458398/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    category: 'Phones'
  },
  {
    id: 7,
    name: 'Iphone 14+',
    price: 502689,
    description: '128gb Blue',
    photo:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h93/h56/63073057112094/apple-iphone-14-128gb-goluboj-106363150-1.jpg',
    category: 'Phones'
  },
  {
    id: 8,
    name: 'Iphone 13 mini',
    price: 446000,
    description: '256gb Midnight; very small',
    photo:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc2/h05/46392662458398/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    category: 'Phones'
  },
  {
    id: 9,
    name: 'Iphone 12 Pro max',
    price: 615214,
    description: '128gb Gold',
    photo:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h08/h34/32806615121950/apple-iphone-12-pro-max-128gb-zolotistyj-100658110-1-Container.jpg',
    category: 'Phones'

  },
  {
    id: 10,
    name: 'MacBook Air 13',
    price: 478990,
    description: '',
    photo:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h67/h95/33125682380830/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    category: 'PC'
  },
  {
    id: 11,
    name: 'MacBook Pro 14',
    price: 986955,
    description: '',
    photo:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hf8/h06/47153374068766/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    category: 'PC'
  },
  {
    id: 12,
    name: 'MacBook Air 13',
    price: 629170,
    description: '',
    photo:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h71/h26/52679167442974/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-starlight-105933751-1.jpg',
    category: 'PC'
  },
  {
    id: 13,
    name: 'MacBook Pro 13',
    price: 673400,
    description: '',
    photo:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8a/hb7/33090949480478/apple-macbook-pro-13-myd82-seryi-100797630-1.jpg',
    category: 'PC'
  },
  {
    id: 14,
    name: 'Xiaomi MI TV  109 см черный',
    price: 204990,
    description: '',
    photo:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hfd/h83/49320428306462/televizor-xiaomi-mi-tv-p1-l43m6-6arg-109-sm-cernyj-102743844-1.jpg',
    category: 'TV'
  },
  {
    id: 15,
    name: 'Xiaomi Mi TV P1 127 см ',
    price: 244990,
    description: '',
    photo:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hfd/h83/49320428306462/televizor-xiaomi-mi-tv-p1-l43m6-6arg-109-sm-cernyj-102743844-1.jpg',
    category: 'TV'
  },
  {
    id: 16,
    name: 'LG 70U 178 см ',
    price: 548930,
    description: '',
    photo:'https://resources.cdn-kaspi.kz/img/m/p/h69/hac/65129103392798.jpg?format=preview-medium',
    category: 'TV'
  },


];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/