const products = [
    {
        id: "1",
        image: "https://m.media-amazon.com/images/I/41ZLGAJEh7L._AC_UY218_.jpg",
        title: "Acer Aspire Z24-890-UA91",
        description: "Acer Aspire Z24-890-UA91 AIO Desktop, 23.8 inches Full HD, 9th Gen Intel Core i5-9400T, 12GB DDR4, 512GB SSD, 802.11ac Wifi, USB 3.1 Type C, Wireless Keyboard and Mouse, Windows 10 Home, Silver",
        price: 799.99
    },
    {
        id: "2",
        image: "https://m.media-amazon.com/images/I/41wPWajbKRL._AC_UY218_.jpg",
        title: "HP 21.5-Inch All-in-One",
        description: "HP 21.5-Inch All-in-One Computer, AMD A4-9125, 4GB RAM, 1TB Hard Drive, Windows 10 (22-c0010, White)",
        price: 399.99
    },
    {
        id: "3",
        image: "https://m.media-amazon.com/images/I/5161sCOKv0L._AC_UY218_.jpg",
        title: "Dell Optiplex 7010",
        description: "(Renewed) Dell Optiplex 7010 Business Desktop Computer (Intel Quad Core i5-3470 3.2GHz, 16GB RAM, 2TB HDD, USB 3.0, DVDRW, Windows 10 Professional)",
        price: 66.99
    },
    {
        id: "4",
        image: "https://m.media-amazon.com/images/I/51E4sSucS6L._AC_SL139_QL70_.jpg",
        title: "Acer Aspire 5",
        description: "Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver",
        price: 79.00
    },
    {
        id: "5",
        image: "https://m.media-amazon.com/images/I/612IMDcnf5L._AC_UY218_.jpg",
        title: "HP 21.5-Inch All-in-One",
        description: "HP 21.5-Inch All-in-One Computer, AMD A4-9125, 4GB RAM, 1TB Hard Drive, Windows 10 (22-c0010, White)",
        price: 67.95
    },
    {
        id: "6",
        image: "https://m.media-amazon.com/images/I/61HI+wFFlCL._AC_UY218_.jpg",
        title: "HP 4NN56AA#ABA Pavilion",
        description: "HP 4NN56AA#ABA Pavilion 24-Inch All-in-One Computer, Intel Core i5-9400T, 12 GB RAM, 512 GB Solid State Drive, Windows 10 (24-Xa0032, Black)",
        price: 83.00
    },
    {
        id: "7",
        image: "https://m.media-amazon.com/images/I/61OF7VdYXhL._AC_UY218_.jpg",
        title: "Dell OptiPlex Desktop",
        description: "Dell OptiPlex Desktop Complete Computer Package with Windows 10 Home - Keyboard, Mouse, 17\" LCD Monitor(brands may vary) (Renewed)",
        price: 799.99
    },
    {
        id: "8",
        image: "https://m.media-amazon.com/images/I/61WfhSl2g7L._AC_UY218_.jpg",
        title: "HP 8300 Elite Small",
        description: "(Renewed) HP 8300 Elite Small Form Factor Desktop Computer, Intel Core i5-3470 3.2GHz Quad-Core, 8GB RAM, 500GB SATA, Windows 10 Pro 64-Bit, USB 3.0, Display Port",
        price: 59.99
    },
    {
        id: "9",
        image: "https://m.media-amazon.com/images/I/61aqiCPKwcL._AC_UY218_.jpg",
        title: 'Acer Aspire 5 Slim',
        description: "Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver",
        price: 223.99
    },
    {
        id: "10",
        image: "https://m.media-amazon.com/images/I/61cqXFT53AL._AC_UL320_.jpg",
        title: "Dell Optiplex 7010",
        description: "(Renewed) Dell Optiplex 7010 Business Desktop Computer (Intel Quad Core i5-3470 3.2GHz, 16GB RAM, New 480GB SSD HDD, USB 3.0, DVDRW, WiFi, Windows 10)",
        price: 567.99
    },
    {
        id: "11",
        image: "https://m.media-amazon.com/images/I/7163XCA83hL._AC_UY218_.jpg",
        title: "HP Elite PC Desktop",
        description: "HP Elite PC Desktop Computer Package - Intel Quad Core i5 3.1GHz, 8GB RAM, 500GB, 19inch LCD Monitor, Keyboard, Mouse, DVD, WiFi Adapter, Windows 10 Professional (Renewed)",
        price: 559.49
    },
    {
        id: "12",
        image: "https://m.media-amazon.com/images/I/71U9+puqGoL._AC_UY218_.jpg",
        title: "Dell OptiPlex 7000",
        description: "Dell OptiPlex 7000 7450 23.8in (1920x1080) Full HD Business ALL-IN-ONE Desktop, Intel Quad-Core i5-6500, 8GB, 500GB, Wi-Fi, Keyboard &amp; Mouse, Windows 10 Pro - Wrt til 2021 (Renewed)",
        price: 959.69
    },
    {
        id: "13",
        image: "https://m.media-amazon.com/images/I/71UGHMTRYcL._AC_UL320_.jpg",
        title: "Dell Optiplex 7060",
        description: "Dell Optiplex 7060 Micro Tower Business Desktop Computer (Intel Core i5-8500T 6 Core, 8GB, 256GB PCIe M.2 NVMe SSD, WiFi) Windows 10 Pro (Renewed)",
        price: 364.94
    },
    {
        id: "14",
        image: "https://m.media-amazon.com/images/I/71ZIIaqU7PL._AC_UY218_.jpg",
        title: "Dell OptiPlex 9020-SFF",
        description: "Dell OptiPlex 9020-SFF, Intel Core i5-4570 3.2GHZ, 16GB RAM, 512GB SSD Solid State, DVDRW, Windows 10 Pro 64bit (Renewed)",
        price: 296.33
    },
    {
        id: "15",
        image: "https://m.media-amazon.com/images/I/71mEp6+f0yL._AC_UY218_.jpg",
        title: "DELL Optiplex Desktop",
        description: "DELL Optiplex Desktop with 22in LCD Monitor (Core 2 Duo 3.0Ghz, 8GB RAM, 1TB HDD, Windows 10), Black (Renewed)",
        price: 994.00
    },
    {
        id: "16",
        image: "https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UL320_.jpg",
        title: "HP 24-Inch All-in-One",
        description: "HP 24-Inch All-in-One Computer, AMD A6-9225, 4GB RAM, 1TB Hard Drive, Windows 10 (24-f0030, White)",
        price: 257.06
    },
    {
        id: "17",
        image: "https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg",
        title: "HP Desktop Core",
        description: "HP Desktop Core 2 Duo 2.6GHz - New 4GB Memory - 500GB HDD - Windows 10 Home Edition - 19\" Generic Monitor, NEW Keyboard, Mouse, Speakers, WiFi Sold (Renewed)",
        price: 444.44
    },
    {
        id: "18",
        image: "https://m.media-amazon.com/images/I/812IGa52fGL._AC_UY218_.jpg",
        title: "HP Elite 7900 Desktop",
        description: "(Renewed) HP Elite 7900 Desktop PC Package, Intel Core 2 Duo Processor, 8GB RAM, 500GB Hard Drive, DVD-RW, Wi-Fi, Windows 10, 19in LCD Monitor",
        price: 899.44
    },
    {
        id: "19",
        image: "https://m.media-amazon.com/images/I/817R6XNZDPL._AC_UY218_.jpg",
        title: "CYBERPOWERPC Gamer Xtreme",
        description: "CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 240GB SSD, 1TB HDD, WiFi Ready & Win 10 Home (GXiVR8060A8, Black)",
        price: 69.99
    },
    {
        id: "20",
        image: "https://m.media-amazon.com/images/I/81ODwqmdl6L._AC_UY218_.jpg",
        title: "iBUYPOWER Gaming PC",
        description: "iBUYPOWER Gaming PC Computer Desktop Element 9260 (Intel Core i7-9700F 3.0Ghz, NVIDIA GeForce GTX 1660 Ti 6GB, 16GB DDR4, 240GB SSD, 1TB HDD,  WiFi & Windows 10 Home) Black",
        price: 39.99
    }
];


import IProductsRepository from "../domain/IProductsRepository"
import Product from "../domain/entities/Product"
class ComputerInMemoryRepository extends IProductsRepository
{
    search(filter) {
        let results = null;
        if (filter) {
            results = products.filter(p => filter.toLowerCase().indexOf(p.title.toLowerCase()) != -1)
        } else {
            results = products;
        }

        return results.map(p => new Product(p.id, p.image, p.title, p.description, p.price));
    }
}

export default ComputerInMemoryRepository