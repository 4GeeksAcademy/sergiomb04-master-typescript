"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customerData = {
    'Joe': {
        visits: 1
    },
    'Carol': {
        visits: 2
    },
    'Howard': {
        visits: 3
    },
    'Carrie': {
        visits: 4
    }
};
function greetCustomer(firstName) {
    let greeting = '';
    if (!customerData[firstName]) {
        greeting = 'Welcome! Is this your first time?';
    }
    else if (customerData[firstName].visits === 1) {
        greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    }
    else if (customerData[firstName].visits > 1) {
        greeting = `Welcome back, ${firstName}! So glad to see you again!`;
    }
    return greeting;
}
