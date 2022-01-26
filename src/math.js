const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => {
	if (num1 > num2) return num1 - num2;
	else return num2 - num1;
};

const name ='Anit'

const greetingMsg = (user) => `Hello ${user}`;
export { add as default, subtract,name,greetingMsg };
