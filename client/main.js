const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const createComplimentBtn = document.getElementById("createComplimentButton")
const userFortuneBtn = document.getElementById("userFortuneButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const createCompliment = () => {
    axsios.post("http://localhost:4000/api/create_compliment/")
};

const getUserFortune = () => {
    axios.get("http://localhost:4000/api/user_fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
userFortuneBtn.addEventListener('click', getUserFortune)
