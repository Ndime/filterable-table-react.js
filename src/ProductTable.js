import React, { Component } from "react";
import './ProductTable.css';
import ProductCategoryRow from './ProductCategoryRow.js';
import ProductRow from './ProductRow.js';


class ProductTable extends Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        let lastCategory = null;
        this.props.products.forEach((pdts) => {

            if (pdts.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !pdts.stocked) {
                return;
            }

            if (pdts.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                    category={pdts.category}
                    key={pdts.category} />
                );
            }
            rows.push(
                <ProductRow
                    product={pdts}
                    key={pdts.name} />
            );
            lastCategory = pdts.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>


        );
    }
}

export default ProductTable;
