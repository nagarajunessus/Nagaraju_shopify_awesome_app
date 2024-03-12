// import React from 'react';
// import { Grid } from '@shopify/polaris';
// import ProductCard from './ProductCard';

// function ProductsList({ filteredData, onClick }) {
//     return (
//         <Grid>
//             {filteredData.map((product, index) => (
//                 <Grid.Cell key={index} columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
//                     <ProductCard product={product} onClick={onClick} />
//                 </Grid.Cell>
//             ))}
//         </Grid>
//     );
// }

// export default ProductsList;




import React, { useState } from 'react';
import { Grid, Button } from '@shopify/polaris';
import ProductCard from './ProductCard';

function ProductsList({ filteredData, onClick }) {
  const itemsPerPage = 8; // Change this as per your requirement
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          primary={currentPage === i}
        >
          {i}
        </Button>
      );
    }
    return buttons;
  };

  return (
    <div>
      <Grid>
        {currentProducts.map((product, index) => (
          <Grid.Cell key={index} columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
            <ProductCard product={product} onClick={onClick} />
          </Grid.Cell>
        ))}
      </Grid>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {renderPageButtons()}
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default ProductsList;
