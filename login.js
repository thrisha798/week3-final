const loginUser = async function (req, res) {
    try {
        const requestBody = req.body;
        const { username, password } = requestBody;

        if (!isValidRequestBody(requestBody)) {
            return res.status(400).send({ status: false, message: "No data provided" });
        }

        if (!isValidData(username)) {
            return res.status(400).send({ status: false, message: "Name is required." });
        }

        if (!isValidEmail.test(username)) {
            return res.status(400).send({ status: false, message: "Please enter valid a name " });
        }

        if (!isValidData(password)) {
            return res.status(400).send({ status: false, message: "Password is required." });
        }

        if (!(password.length >= 8 && password.length <= 15)) {
            return res.status(400).send({ status: false, msg: "Password Should be minimum 8 characters and maximum 15 characters", });
        }

        const matchUser = await userModel.findOne({ username, password });
        if (!matchUser) {
            return res.status(404).send({ status: false, message: " username/Password is Not Matched" });
        }

        const token = jwt.sign(
            {
                userId: matchUser._id.toString(),
                Project: "Book Management",
                batch: "Uranium",
                iat: new Date().getTime() / 1000 //(iat)Issued At- the time at which the JWT was issued.              
            },
            "Project-03_group-28",
            {
                expiresIn: "12000sec",
            });

        res.setHeader("x-user-key", token)
        return res.status(200).send({ status: true, message: "User Logged in successfully", data: token, });
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
};