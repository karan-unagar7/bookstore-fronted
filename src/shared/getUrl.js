function getUrl(action,values)
{
    let url='';

    const baseUrl='http://localhost:3001/api/v1/book'

    switch(action)
    {
        case 1:
            url = `${baseUrl}/getOne?bookName=${values?.name}`
            break;
        case 2:
            url = `${baseUrl}/getOne?bookName=${values?.name}&authorName=${values?.author}`
            break;
    }
    return url;
}

export default getUrl;