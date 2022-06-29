import { useState ,useMemo,useEffect } from 'react';

function useElementOnScroll(targetRef) {
    const [isVisible, setIsVisible] = useState(false)
    const options = useMemo(()=>{
        return{
          root :null,
          rootMargin : '0px',
          threshold:0
        }},[])
      
    const callbackFuntion = entries =>{
        setIsVisible(entries[0].isIntersecting)
    }
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFuntion, options)
        const currentTarget = targetRef.current
        
        console.log(targetRef)
        console.log(currentTarget)
        if(currentTarget) observer.observe(currentTarget)
        return () => {
          if(currentTarget) observer.unobserve(currentTarget)
        }
      }, [targetRef,options])
  return isVisible
}

export default useElementOnScroll