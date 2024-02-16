const express = require('express');
const router = express.Router();
const user = require('../models/user');
const {body , validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const fetchUser = require('../middleware/fetchUser');

const definedToken = 'taskmanager'
