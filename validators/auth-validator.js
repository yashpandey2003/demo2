const {z} = require('zod');

const loginSchema = z.object({
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .min(3, {message: "Email must be atleast of 3 characters"})
    .max(255, {message: "Email must not be more than 255 characters"}),

    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(7, {message: "Password must be atleast of 6 characters"})
    .max(1024, {message: "Name must not be more than 1024 characters"}),

})

const signupSchema = loginSchema.extend({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3, {message: "Name must be atleast of 3 characters"})
    .max(255, {message: "Name must not be more than 255 characters"}),


    phone: z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10, {message: "Phone must be atleast of 10 characters"})
    .max(20, {message: "Phone must not be more than 20 characters"}),


})

const needSchema = z.object({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3, {message: "Name must be atleast of 3 characters"})
    .max(255, {message: "Name must not be more than 255 characters"}),

    email: z
    .string({required_error:"Email is required"})
    .trim()
    .min(3, {message: "Email must be atleast of 3 characters"})
    .max(255, {message: "Email must not be more than 255 characters"}),

    phone: z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10, {message: "Phone must be atleast of 10 characters"})
    .max(20, {message: "Phone must not be more than 20 characters"}),

    address: z
    .string({required_error:"Address is required"})
    .trim(),

    details: z
    .string({required_error:"Details of work is required"})
    .trim(),

})


module.exports = {signupSchema, loginSchema, needSchema};