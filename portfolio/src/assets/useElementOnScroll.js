import { useState ,useMemo,useEffect } from 'react';

function useElementOnScroll(targetRef ,options) {
    const [isVisible, setIsVisible] = useState(false)
    var finalOptions = useMemo(()=>{
        return{
          root :null,
          rootMargin : '0px',
          threshold:0
        }},[])
    if(options)
        finalOptions=options;
    const callbackFuntion = entries =>{
        setIsVisible(entries[0].isIntersecting)
    }
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFuntion, finalOptions)
        const currentTarget = targetRef.current
        if(currentTarget) observer.observe(currentTarget)
        return () => {
          if(currentTarget) observer.unobserve(currentTarget)
        }
      }, [targetRef,finalOptions])
  return isVisible
}

export default useElementOnScroll