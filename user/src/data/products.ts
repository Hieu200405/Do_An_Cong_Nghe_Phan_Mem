export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  category: string;
  description: string;
  brand: string;
  stock: number;
  featured?: boolean;
}

export const products: Product[] = [
  // Nhà Bếp (kitchen)
  {
    id: 1,
    name: 'Nồi cơm điện thông minh Philips',
    price: 2990000,
    image: 'http://localhost:5000/assets/products/amsieutoc.jpg',
    rating: 4.5,
    reviews: 128,
    discount: 15,
    category: 'kitchen',
    description: 'Nồi cơm điện thông minh với công nghệ nấu 3D, giữ ấm 24h',
    brand: 'Philips',
    stock: 50,
  },
  {
    id: 2,
    name: 'Máy rửa chén Bosch',
    price: 15990000,
    image: 'http://localhost:5000/assets/products/mayruachen.jpg',
    rating: 4.8,
    reviews: 89,
    discount: 10,
    category: 'kitchen',
    description: 'Máy rửa chén công nghệ Đức, tiết kiệm nước và điện',
    brand: 'Bosch',
    stock: 30,
  },
  {
    id: 3,
    name: 'Lò vi sóng Samsung',
    price: 3490000,
    image: 'http://localhost:5000/assets/products/lovisong.jpg',
    rating: 4.6,
    reviews: 156,
    category: 'kitchen',
    description: 'Lò vi sóng điện tử với nhiều chế độ nấu tự động',
    brand: 'Samsung',
    stock: 45,
  },
  {
    id: 4,
    name: 'Bếp từ đôi Electrolux',
    price: 12990000,
    image: 'http://localhost:5000/assets/products/bepdientu.jpg',
    rating: 4.7,
    reviews: 201,
    discount: 20,
    category: 'kitchen',
    description: 'Bếp từ đôi với công nghệ cảm ứng thông minh',
    brand: 'Electrolux',
    stock: 25,
  },

  // Phòng Khách (livingroom)
  {
    id: 5,
    name: 'Smart TV Samsung 65 inch',
    price: 28990000,
    image: 'http://localhost:5000/assets/products/smarttv.jpg',
    rating: 4.9,
    reviews: 234,
    discount: 15,
    category: 'livingroom',
    description: 'Smart TV 4K với công nghệ QLED mới nhất',
    brand: 'Samsung',
    stock: 20,
  },
  {
    id: 6,
    name: 'Máy lọc không khí LG',
    price: 7990000,
    image: 'http://localhost:5000/assets/products/maylocnuoc.jpg',
    rating: 4.7,
    reviews: 167,
    category: 'livingroom',
    description: 'Máy lọc không khí với cảm biến bụi mịn PM2.5',
    brand: 'LG',
    stock: 40,
  },
  {
    id: 7,
    name: 'Quạt thông minh Xiaomi',
    price: 1990000,
    image: 'http://localhost:5000/assets/products/quatthongminhxiaomi.jpg',
    rating: 4.5,
    reviews: 145,
    discount: 10,
    category: 'livingroom',
    description: 'Quạt điều khiển qua điện thoại với 100 cấp độ gió',
    brand: 'Xiaomi',
    stock: 60,
  },
  {
    id: 8,
    name: 'Đèn thông minh Philips Hue',
    price: 2490000,
    image: 'http://localhost:5000/assets/products/denledthongminh.jpg',
    rating: 4.6,
    reviews: 178,
    category: 'livingroom',
    description: 'Bộ đèn LED thông minh điều khiển qua giọng nói',
    brand: 'Philips',
    stock: 55,
  },

  // Phòng Ngủ (bedroom)
  {
    id: 9,
    name: 'Máy điều hòa Daikin Inverter',
    price: 11990000,
    image: 'http://localhost:5000/assets/products/maydieuhoadaikin.jpg',
    rating: 4.8,
    reviews: 223,
    discount: 12,
    category: 'bedroom',
    description: 'Điều hòa inverter tiết kiệm điện với chế độ ngủ thông minh',
    brand: 'Daikin',
    stock: 35,
  },
  {
    id: 10,
    name: 'Đèn ngủ thông minh',
    price: 890000,
    image: 'http://localhost:5000/assets/products/dennguthongminh.jpg',
    rating: 4.4,
    reviews: 134,
    category: 'bedroom',
    description: 'Đèn ngủ điều chỉnh độ sáng và màu sắc qua điện thoại',
    brand: 'Mi Home',
    stock: 70,
  },
  {
    id: 11,
    name: 'Máy tạo ẩm Beurer',
    price: 1490000,
    image: 'http://localhost:5000/assets/products/maytaoam.jpg',
    rating: 4.5,
    reviews: 156,
    discount: 8,
    category: 'bedroom',
    description: 'Máy tạo ẩm siêu âm với đèn LED đổi màu',
    brand: 'Beurer',
    stock: 45,
  },
  {
    id: 12,
    name: 'Máy lọc không khí mini',
    price: 2990000,
    image: 'http://localhost:5000/assets/products/maylocnuoc2.jpg',
    rating: 4.3,
    reviews: 112,
    category: 'bedroom',
    description: 'Máy lọc không khí nhỏ gọn dành cho phòng ngủ',
    brand: 'Coway',
    stock: 40,
  },

  // Phòng Tắm (bathroom)
  {
    id: 13,
    name: 'Máy nước nóng Ariston',
    price: 5990000,
    image: 'http://localhost:5000/assets/products/maynuocnong.jpg',
    rating: 4.7,
    reviews: 189,
    discount: 15,
    category: 'bathroom',
    description: 'Máy nước nóng trực tiếp với công nghệ tiết kiệm điện',
    brand: 'Ariston',
    stock: 30,
  },
  {
    id: 14,
    name: 'Vòi sen thông minh',
    price: 2490000,
    image: 'http://localhost:5000/assets/products/voisen.jpg',
    rating: 4.6,
    reviews: 145,
    category: 'bathroom',
    description: 'Vòi sen với chế độ massage và điều chỉnh áp lực nước',
    brand: 'TOTO',
    stock: 50,
  },
  {
    id: 15,
    name: 'Gương thông minh LED',
    price: 3990000,
    image: 'http://localhost:5000/assets/products/gươngthongminhled.jpg',
    rating: 4.5,
    reviews: 123,
    discount: 10,
    category: 'bathroom',
    description: 'Gương phòng tắm tích hợp đèn LED và chống mờ',
    brand: 'Kohler',
    stock: 25,
  },
  {
    id: 16,
    name: 'Máy sấy khăn',
    price: 1990000,
    image: 'http://localhost:5000/assets/products/maysaykhăn.jpg',
    rating: 4.4,
    reviews: 98,
    category: 'bathroom',
    description: 'Máy sấy khăn điện tử với hẹn giờ thông minh',
    brand: 'Panasonic',
    stock: 40,
  },

  // Điện Gia Dụng (appliance)
  {
    id: 17,
    name: 'Máy giặt LG AI DD',
    price: 14990000,
    image: 'http://localhost:5000/assets/products/maygiatlg.jpg',
    rating: 4.9,
    reviews: 256,
    discount: 20,
    category: 'appliance',
    description: 'Máy giặt thông minh với công nghệ AI DD™',
    brand: 'LG',
    stock: 30,
  },
  {
    id: 18,
    name: 'Tủ lạnh Samsung Family Hub',
    price: 45990000,
    image: 'http://localhost:5000/assets/products/tulanhsamsung.jpg',
    rating: 4.8,
    reviews: 189,
    discount: 15,
    category: 'appliance',
    description: 'Tủ lạnh thông minh với màn hình cảm ứng và camera bên trong',
    brand: 'Samsung',
    stock: 20,
  },
  {
    id: 19,
    name: 'Máy sấy quần áo',
    price: 12990000,
    image: 'http://localhost:5000/assets/products/maysayquầnáo.jpg',
    rating: 4.7,
    reviews: 167,
    category: 'appliance',
    description: 'Máy sấy quần áo với công nghệ cảm biến độ ẩm',
    brand: 'Electrolux',
    stock: 25,
  },
  {
    id: 20,
    name: 'Máy rửa bát âm tủ',
    price: 17990000,
    image: 'http://localhost:5000/assets/products/mayruabatam.jpg',
    rating: 4.6,
    reviews: 145,
    discount: 10,
    category: 'appliance',
    description: 'Máy rửa bát âm tủ với 6 chương trình rửa',
    brand: 'Bosch',
    stock: 15,
  },

  // Đồ Dùng Thông Minh (smart)
  {
    id: 21,
    name: 'Robot hút bụi Roborock',
    price: 9990000,
    image: 'http://localhost:5000/assets/products/robothutbui.jpg',
    rating: 4.8,
    reviews: 234,
    discount: 15,
    category: 'smart',
    description: 'Robot hút bụi lau nhà với công nghệ LiDAR',
    brand: 'Roborock',
    stock: 40,
  },
  {
    id: 22,
    name: 'Khóa cửa thông minh',
    price: 5990000,
    image: 'http://localhost:5000/assets/products/khóacuathongminh.jpg',
    rating: 4.7,
    reviews: 178,
    category: 'smart',
    description: 'Khóa cửa vân tay với kết nối WiFi',
    brand: 'Yale',
    stock: 35,
  },
  {
    id: 23,
    name: 'Camera an ninh thông minh',
    price: 2990000,
    image: 'http://localhost:5000/assets/products/cameraninh.jpg',
    rating: 4.6,
    reviews: 156,
    discount: 10,
    category: 'smart',
    description: 'Camera IP với khả năng phát hiện chuyển động',
    brand: 'Imou',
    stock: 50,
  },
  {
    id: 24,
    name: 'Loa thông minh Google Nest',
    price: 1990000,
    image: 'http://localhost:5000/assets/products/loathongminh.jpg',
    rating: 4.5,
    reviews: 145,
    category: 'smart',
    description: 'Loa thông minh với trợ lý ảo Google Assistant',
    brand: 'Google',
    stock: 45,
  },
]; 