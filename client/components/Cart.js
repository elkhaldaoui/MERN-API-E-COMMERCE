import { Component, Fragment } from "react";
import AppNavbar from "./AppNavbar";
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Alert, Container} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getCart, deleteFromCart } from ''