export type Property = {
  id: number; title: string; type: string; transaction: string;
  price: number; priceLabel: string; location: string;
  bhk: string; area: string; floor: string; imageUrl: string;
  available: boolean; featured: boolean; isNew: boolean;
};

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;

export const properties: Property[] = [
  { id:1, title:"2BHK Premium Flat", type:"Flat", transaction:"Sale", price:3200000, priceLabel:"₹ 32,00,000", location:"Nalasopara East, Near Station", bhk:"2 BHK", area:"650 sq.ft", floor:"3rd Floor", imageUrl:img("photo-1560448204-e02f11c3d0e2"), available:true, featured:true, isNew:true },
  { id:2, title:"Spacious 1BHK Apartment", type:"Flat", transaction:"Rent", price:12000, priceLabel:"₹ 12,000/mo", location:"Vasai West, Ambadi Road", bhk:"1 BHK", area:"480 sq.ft", floor:"5th Floor", imageUrl:img("photo-1502672260266-1c1ef2d93688"), available:true, featured:false, isNew:false },
  { id:3, title:"Commercial Shop", type:"Shop", transaction:"Sale", price:4500000, priceLabel:"₹ 45,00,000", location:"Virar West Market", bhk:"Shop", area:"320 sq.ft", floor:"Ground", imageUrl:img("photo-1582407947304-fd86f028f716"), available:true, featured:true, isNew:false },
  { id:4, title:"3BHK Luxury Bungalow", type:"Bungalow", transaction:"Sale", price:18500000, priceLabel:"₹ 1.85 Cr", location:"Nalasopara West", bhk:"3 BHK", area:"1850 sq.ft", floor:"G+1", imageUrl:img("photo-1568605114967-8130f3a36994"), available:true, featured:true, isNew:true },
  { id:5, title:"Open Plot - NA Land", type:"Plot", transaction:"Sale", price:2800000, priceLabel:"₹ 28,00,000", location:"Boisar, Palghar", bhk:"Plot", area:"1200 sq.ft", floor:"-", imageUrl:img("photo-1500382017468-9049fed747ef"), available:true, featured:false, isNew:false },
  { id:6, title:"1BHK Heavy Deposit", type:"Flat", transaction:"Heavy Deposit", price:300000, priceLabel:"₹ 3,00,000 Dep.", location:"Nalasopara East", bhk:"1 BHK", area:"450 sq.ft", floor:"2nd Floor", imageUrl:img("photo-1522708323590-d24dbb6b0267"), available:true, featured:false, isNew:true },
  { id:7, title:"2BHK Family Apartment", type:"Flat", transaction:"Rent", price:18000, priceLabel:"₹ 18,000/mo", location:"Virar East, Yashwant Smruti", bhk:"2 BHK", area:"720 sq.ft", floor:"7th Floor", imageUrl:img("photo-1493809842364-78817add7ffb"), available:true, featured:false, isNew:false },
  { id:8, title:"Showroom Space", type:"Shop", transaction:"Rent", price:35000, priceLabel:"₹ 35,000/mo", location:"Vasai East Highway", bhk:"Showroom", area:"900 sq.ft", floor:"Ground", imageUrl:img("photo-1560185007-cde436f6a4d0"), available:true, featured:true, isNew:false },
  { id:9, title:"New Construction Tower", type:"Flat", transaction:"Sale", price:5400000, priceLabel:"₹ 54,00,000", location:"Nalasopara East New Project", bhk:"2 BHK", area:"780 sq.ft", floor:"8th Floor", imageUrl:img("photo-1545324418-cc1a3fa10c00"), available:true, featured:true, isNew:true },
  { id:10, title:"Compact Studio", type:"Flat", transaction:"Heavy Deposit", price:200000, priceLabel:"₹ 2,00,000 Dep.", location:"Vasai West", bhk:"1 RK", area:"320 sq.ft", floor:"4th Floor", imageUrl:img("photo-1502005229762-cf1b2da7c5d6"), available:true, featured:false, isNew:false },
  { id:11, title:"4BHK Premium Bungalow", type:"Bungalow", transaction:"Sale", price:32000000, priceLabel:"₹ 3.20 Cr", location:"Virar Hill View", bhk:"4 BHK", area:"2400 sq.ft", floor:"G+2", imageUrl:img("photo-1613977257363-707ba9348227"), available:true, featured:true, isNew:false },
  { id:12, title:"Office Space", type:"Office", transaction:"Rent", price:25000, priceLabel:"₹ 25,000/mo", location:"Nalasopara Business Hub", bhk:"Office", area:"600 sq.ft", floor:"3rd Floor", imageUrl:img("photo-1497366216548-37526070297c"), available:true, featured:false, isNew:true },
];

export const services = [
  { id:1, title:"Sale & Purchase", description:"End-to-end assistance for buying or selling your property at the best market value.", icon:"🏷️" },
  { id:2, title:"Rent & Heavy Deposit", description:"Find the right tenant or rental home, plus heavy deposit options across Vasai-Virar.", icon:"🏠" },
  { id:3, title:"Leave & License", description:"Hassle-free leave and license agreements registered with the sub-registrar office.", icon:"📋" },
  { id:4, title:"Home Loans", description:"Tie-ups with leading banks to get your loan sanctioned quickly with the best rates.", icon:"🏦" },
  { id:5, title:"Property Insurance", description:"Protect your most valuable asset with comprehensive property insurance plans.", icon:"🛡️" },
  { id:6, title:"Notary & Registration", description:"Legal documentation, notary, agreement drafting and registration handled by experts.", icon:"📑" },
  { id:7, title:"New Construction", description:"Custom construction projects in Nalasopara, Palghar and Boisar regions.", icon:"🚧" },
  { id:8, title:"Property Investment", description:"Curated investment opportunities with strong appreciation potential.", icon:"📊" },
  { id:9, title:"Property Management", description:"Maintenance, tenant management and rent collection — all taken care of.", icon:"🔑" },
];

export const testimonials = [
  { id:1, name:"Ramesh Patil", location:"Nalasopara East", rating:5, text:"Bought my first 2BHK through Jay Bholenath Enterprises. The process was smooth, transparent and they handled all documentation.", avatarUrl:"https://i.pravatar.cc/120?img=12" },
  { id:2, name:"Sneha Sharma", location:"Vasai West", rating:5, text:"They found me a great rental within 3 days. Very professional and always available on WhatsApp. Highly recommended.", avatarUrl:"https://i.pravatar.cc/120?img=47" },
  { id:3, name:"Mahesh Joshi", location:"Virar East", rating:5, text:"Sold my flat at 8% above market expectation. Their network and negotiation skills are unmatched in the area.", avatarUrl:"https://i.pravatar.cc/120?img=33" },
  { id:4, name:"Priya Desai", location:"Palghar", rating:5, text:"Got a wonderful plot in Boisar. The team guided me through legal verification and registration step by step.", avatarUrl:"https://i.pravatar.cc/120?img=45" },
  { id:5, name:"Anil Kumar", location:"Nalasopara West", rating:5, text:"Heavy deposit option was a lifesaver for my family. Genuine landlord, no hidden charges, all paperwork done.", avatarUrl:"https://i.pravatar.cc/120?img=15" },
  { id:6, name:"Kavita Naik", location:"Vasai East", rating:5, text:"15 years of experience really shows. They know every corner of Vasai-Virar and gave honest advice throughout.", avatarUrl:"https://i.pravatar.cc/120?img=49" },
];

export const projects = [
  { id:1, name:"Nallasopara Legal Chawl", location:"Nalasopara East", type:"Residential Chawl", status:"Completed", description:"A fully legal, RERA-compliant chawl development with 24 family units, water connection, and electricity setup.", imageUrl:img("photo-1448630360428-65456885c650") },
  { id:2, name:"Palghar–Boisar New Construction", location:"Palghar District", type:"Residential Tower", status:"Ongoing", description:"Premium 1 & 2 BHK apartments with modern amenities, lift, parking and 24x7 security in upcoming Boisar belt.", imageUrl:img("photo-1486406146926-c627a92ad1ab") },
];

export const stats = [
  { id:1, value:500, suffix:"+", label:"Properties Sold" },
  { id:2, value:1000, suffix:"+", label:"Happy Clients" },
  { id:3, value:4.9, suffix:"★", label:"Average Rating" },
  { id:4, value:15, suffix:"+", label:"Years Experience" },
];

export const faqs = [
  { q:"Which areas do you cover?", a:"We primarily operate across Nalasopara, Vasai, Virar, Palghar and Boisar belts in Maharashtra." },
  { q:"Do you charge a brokerage fee?", a:"Yes, a standard brokerage applies on successful deals. We disclose every charge upfront — no hidden fees." },
  { q:"What is heavy deposit?", a:"Heavy deposit is a rental arrangement where a large refundable deposit is paid instead of monthly rent — popular in Mumbai suburbs." },
  { q:"Do you help with home loans?", a:"Yes, we have tie-ups with leading banks and NBFCs to get your loan sanctioned at competitive rates." },
  { q:"Are your listings RERA-verified?", a:"All new construction projects we represent are RERA registered. We share documents on request." },
  { q:"How quickly do you respond?", a:"WhatsApp inquiries are typically answered within 30 minutes during working hours (9 AM – 9:30 PM, all 7 days)." },
];

export const PHONE = "000033002";
export const PHONE_RAW = "000033002";
export const WHATSAPP = `https://wa.me/${PHONE_RAW}`;
