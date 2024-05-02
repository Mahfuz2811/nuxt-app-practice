export default defineEventHandler( async (event) => {

    console.log("event", event)

    const { name } = getQuery(event)

    //https://api.currencyapi.com/v3/latest?apikey=cur_live_rYZOVKBOdkbnL1i1boCMoMZKLGIB53rhUCF4JjWP&currencies=EUR%2CUSD%2CCAD
    const { age } = await readBody(event)

    return {
        'message': `Hello ${name}. You are ${age} years old`
    }

})