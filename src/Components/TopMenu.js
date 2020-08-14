import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes, { func } from 'prop-types';
import { CartContext } from '../Contexts/Cart';

function TopMenu(props) {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">TiLo Boutique</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <CartContext.Consumer>
                    {({ cartItem }) => <NavLink href="/">Cart ({cartItem.length})</NavLink>}
                </CartContext.Consumer>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/products/">Products</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

NavbarToggler.propTypes = {
    type: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

export default TopMenu;