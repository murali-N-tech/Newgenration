    const Contact = require('../models/contactModel');
    const nodemailer = require('nodemailer');

    /**
     * @desc    Submit a new contact message and send email notification
     * @route   POST /api/contact
     * @access  Public
     */
    const submitContactForm = async (req, res) => {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'Please fill out all fields' });
        }

        try {
            // 1. Save the message to the database
            const savedMessage = await Contact.create({ name, email, subject, message });

            // 2. If saved successfully, send an email notification
            if (savedMessage) {
                // Create a transporter object using Gmail SMTP
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS,
                    },
                });

                // Set up email data
                const mailOptions = {
                    from: `"School Website" <${process.env.EMAIL_USER}>`, // sender address
                    to: process.env.ADMIN_EMAIL, // list of receivers
                    subject: `New Contact Message: ${subject}`, // Subject line
                    html: `
                        <h2>You have a new message from your website's contact form:</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong></p>
                        <p>${message}</p>
                    `,
                };

                // Send mail with defined transport object
                await transporter.sendMail(mailOptions);
            }

            res.status(201).json({ message: 'Message sent successfully! We will get back to you soon.' });

        } catch (error) {
            console.error("Error in submitContactForm: ", error);
            res.status(500).json({ message: 'Server Error' });
        }
    };

    module.exports = {
        submitContactForm,
    };
