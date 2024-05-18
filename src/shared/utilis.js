export const isLogging = ()=>{
    const token=localStorage.getItem('token')
    return !!token;
}