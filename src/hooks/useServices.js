import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Programming-Hero-Web-Course3/healthcare-related-website-Rony163/main/public/services.json?token=ASLR6CINUU42ELTH34FOXVDBNWCIA')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [
        services
    ]
}

export default useServices;