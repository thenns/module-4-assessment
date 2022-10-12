const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const createFortuneBtn = document.getElementById("createFortuneButton")
const userFortuneBtn = document.getElementById("userFortuneButton")
const deleteUserFortuneBtn = document.getElementById("deleteFortuneButton")
const fortuneText = document.getElementById("fortune")
const changeLastFortuneBtn = document.getElementById("modifyFortuneButton")
const newFortuneText = document.getElementById("newFortune")


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

const createFortune = (event) => {
    event.preventDefault();
    const body = { fortune: fortuneText.value };
    axios.post("http://localhost:4000/api/create_fortune/", body)
        .then(res => {
            alert("fortune submitted");
    });
};

const getUserFortune = () => {
    axios.get("http://localhost:4000/api/user_fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const deleteLastFortune = () => {
    axios.delete("http://localhost:4000/api/delete_user_fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const changeLastFortune = () => {
    event.preventDefaul();
    const body = { fortune: newFortuneText.value };
    axios.put("http://localhost:4000/api/change_user_fortune/", body)
        .then(res => {
            alert("fortune updated");
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
userFortuneBtn.addEventListener('click', getUserFortune)
createFortuneBtn.addEventListener('click', createFortune)
deleteUserFortuneBtn.addEventListener('click', deleteLastFortune)
changeLastFortuneBtn.addEventListener('click', changeLastFortune)
