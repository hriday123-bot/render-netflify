const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://hriday23:Dhanhriday12%23@cluster0.3dvewhl.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define the Submission model
const submissionSchema = new mongoose.Schema({
    sdh_id: {
        type: String,
        required: true,
    },
     sdh_type: {
        type: String,
        required: true,
    },
    sdh_super: {
        type: String,
    },
    bi_address:{
        type: String
    },
    lbi:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    client_id:{
        type: String,
        required: true
    },
    participation_status:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    ad_type:{
        type: String,
        required: true
    },
    ad_l1:{type:String },
    ad_l2:{type:String },
    ad_l3:{type:String },
    ad_l4:{type:String },
    ad_l5:{type:String },
    st_name: { type: String,required: true},
    build_no: { type: String,required: true},
    post_box: { type: String},
    post_code: { type: String},
    town_name: { type: String,required: true},
    csb: { type: String,required: true},
    country: { type: String,required: true},
});

const Submission = mongoose.model('Submission', submissionSchema);

// Create a new submission
app.post('/submit', async (req, res) => {
    try {
        const { sdh_id, sdh_type, sdh_super, bi_address, lbi, email, client_id, participation_status,name,ad_type,ad_l1,ad_l2,ad_l3,ad_l4,ad_l5,
        st_name, build_no, post_box,post_code,town_name,csb,country } = req.body;
        const submission = new Submission({
            sdh_id, sdh_type, sdh_super, bi_address, lbi, email, client_id, participation_status, name, ad_type, ad_l1, ad_l2, ad_l3, ad_l4, ad_l5,
            st_name, build_no, post_box, post_code, town_name, csb, country });
        await submission.save();
        res.status(201).json(submission);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
