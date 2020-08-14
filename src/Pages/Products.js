import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Container, Row, Col
} from 'reactstrap';
import axios from 'axios';

import { CartContext } from '../Contexts/Cart';

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/products').then((res) => {
            this.setState({
                products: res.data
            });
        })
    }

    render() {
        const { products } = this.state;
        return (
            <Container>
                <Row>
                    {products.map((item, index) =>
                        <Col key={index} sm="6" md="4" lg="3" xl="2">
                            <Card>
                                <CardImg top width="100%" src={item.imageUrl} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{item.name}</CardTitle>
                                    <CardText>{item.description}</CardText>
                                    <CartContext.Consumer>
                                        {({addToCart}) => <Button onClick={() => addToCart(item)}>Add to cart</Button>}
                                    </CartContext.Consumer>
                                </CardBody>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }
}

export default Products;