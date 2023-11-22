import React from 'react';

const products = [
  {
    id: 1,
    name: 'Stylish Dress',
    description: 'A beautiful and stylish dress for any occasion.',
    imageUrl: 'https://media.istockphoto.com/id/535413222/photo/businessman-informal-akimbo-action.jpg?s=1024x1024&w=is&k=20&c=igYVJXPxFelMOXZGhTdv81p7aIY3JrSkeMTy_5BWOPk=',
  },
  {
    id: 2,
    name: 'Casual Shirt',
    description: 'A comfortable and casual shirt for everyday wear.',
    imageUrl: 'https://media.istockphoto.com/id/1080910832/photo/young-stylish-businessman-having-takeaway-coffee.jpg?s=1024x1024&w=is&k=20&c=fbpHqEQpfGf746d73OFCZ1P3gSXt-66DOjd0Pc30_os=',
  },

  {
    id: 3,
    name: 'Elegant Gown',
    description: 'An elegant gown for special occasions.',
    imageUrl: 'https://media.istockphoto.com/id/1357013253/photo/beautiful-emotional-woman-wearing-shiny-dress.jpg?s=1024x1024&w=is&k=20&c=NfyhM7ugyh5TA6tFuh8_8wrZbptvZj_qbJdTTSR3-ec=',
  },
  
  {
    id: 4,
    name: 'Summer Dress',
    description: 'A light and breezy dress perfect for summer.',
    imageUrl: 'https://media.istockphoto.com/id/1167510292/photo/young-beautiful-woman-wearing-t-shirt-standing-over-white-isolated-background-looking.jpg?s=1024x1024&w=is&k=20&c=2mhmO_vKgIw78OiYWZh4kMRcJOPPOf5yqVaESFsyusw=',
  },
  {
    id: 5,
    name: 'Business Attire',
    description: 'Professional business attire for a polished look.',
    imageUrl: 'https://media.istockphoto.com/id/1364422330/photo/portrait-of-businessman-standing-with-arms-crossed-in-modern-corporate-office.jpg?s=1024x1024&w=is&k=20&c=vYoz2xjiUBDUNUq1xBcGPm2lPSmCIoIsWNhGX0643Lk=',
  },
  {
    id: 6,
    name: 'Cozy Sweater',
    description: 'Stay warm and stylish with this cozy sweater.',
    imageUrl: 'https://media.istockphoto.com/id/1312657686/photo/portrait-of-a-young-brunette-girl-pointing-to-the-right-on-flat-red-background.jpg?s=1024x1024&w=is&k=20&c=njdpF2maANcurIFmuuWZT9Y3H2LKoaXpdV-XTpDvVzU=',
  },
];

const Products = () => {
  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card">
              <img
                src={product.imageUrl}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
