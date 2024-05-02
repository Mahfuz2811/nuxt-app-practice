export default defineEventHandler( async (event) => {
    
    const { code } = event.context.params

    //cur_live_rYZOVKBOdkbnL1i1boCMoMZKLGIB53rhUCF4JjWP

    const { currencyKey } = useRuntimeConfig()

    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`

    const { data } = await $fetch(uri)

    console.log(data)

    return data
})