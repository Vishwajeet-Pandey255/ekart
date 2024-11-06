import React from 'react';
import { Container, Row, Col, Tab, Nav, Image } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import Heading from '../components/Heading';
import profilePix from '../images/profile-picture.png';
import { FaClipboardList, FaUser } from 'react-icons/fa';
import { GiWallet } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import './my-account.css';
import OrderCard from '../components/OrderCard';

const MyAccount = () => {
    const [theme] = useThemeHook();

    return (
        <Container className="py-5 mt-5">
            <Heading heading="My Account" />
            <Tab.Container defaultActiveKey="my-orders">
                <Row className="justify-content-evenly mt-4 p-1">
                    <Col sm={3} className={`p-3 rounded user-menu ${theme ? 'text-light bg-dark' : 'text-black bg-light'}`}>
                        <Row className="mb-3 align-items-center">
                            <Col xs={3}>
                                <Image
                                    src={profilePix}
                                    thumbnail
                                    fluid
                                    roundedCircle
                                    className="p-0"
                                />
                            </Col>
                            <Col xs={9}>
                                <span>Hello,</span>
                                <h4>Code With Vishwajeet</h4>
                            </Col>
                        </Row>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="mb-3">
                                <Nav.Link eventKey="my-orders" className="d-flex align-items-center">
                                    My Orders
                                    <FaClipboardList size="1.4rem" className="ms-auto" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mb-3">
                                <Nav.Link eventKey="account-details" className="d-flex align-items-center">
                                    Account Details
                                    <FaUser size="1.4rem" className="ms-auto" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mb-3">
                                <Nav.Link eventKey="address" className="d-flex align-items-center">
                                    Address
                                    <IoLocationSharp size="1.4rem" className="ms-auto" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="wallet" className="d-flex align-items-center">
                                    Wallet
                                    <GiWallet size="1.4rem" className="ms-auto" />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={8} className={`p-3 rounded ${theme ? 'text-light bg-dark' : 'text-black bg-light'}`}>
                        <Tab.Content>
                            <Tab.Pane eventKey="my-orders">
                                <Heading heading="My Orders" size="h3" />
                                <OrderCard
                                    orderDate="24 Jun, 2022"
                                    orderId="1234"
                                    title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                                    img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                                    deliveredDate="05 July, 2022"
                                />
                                <OrderCard
                                    orderDate="24 Jun, 2022"
                                    orderId="1334"
                                    title="Mens Casual Premium Slim Fit T-Shirts"
                                    img="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                                    deliveredDate="05 July, 2022"
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="account-details">
                                <Heading heading="Account Details" size="h3" />
                                <p>Update your account details here.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="address">
                                <Heading heading="Address" size="h3" />
                                <p>Add or update your address here.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="wallet">
                                <Heading heading="Wallet" size="h3" />
                                <p>Manage your wallet here.</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default MyAccount;
