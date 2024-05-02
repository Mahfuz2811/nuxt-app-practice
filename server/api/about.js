export default defineEventHandler( async (event) => {

    console.log("event", event)

    const { name } = getQuery(event)

    const { age } = await readBody(event)

    return {
        'message': `Hello ${name}. You are ${age} years old`
    }

})