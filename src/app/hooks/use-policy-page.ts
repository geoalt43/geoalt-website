import { useEffect } from 'react'

export function usePolicyPage() {
  useEffect(() => {
    const stars = document.getElementById('stars')
    const stars2 = document.getElementById('stars2')
    const stars3 = document.getElementById('stars3')
    
    if (stars) stars.style.display = 'none'
    if (stars2) stars2.style.display = 'none'
    if (stars3) stars3.style.display = 'none'
    
    const hideFooters = () => {
      const allFooters = document.querySelectorAll('footer')
      allFooters.forEach(f => {
        if (!f.hasAttribute('data-policy-footer')) {
          f.style.display = 'none'
        } else {
          f.style.display = 'block'
          f.style.visibility = 'visible'
          f.style.position = 'relative'
          f.style.zIndex = '10'
        }
      })
    }
    
    hideFooters()
    
    const observer = new MutationObserver((mutations) => {
      let shouldCheck = false
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          for (const node of Array.from(mutation.addedNodes)) {
            if (node.nodeType === 1 && (node.nodeName === 'FOOTER' || (node as Element).querySelector?.('footer'))) {
              shouldCheck = true
              break
            }
          }
        }
        if (shouldCheck) break
      }
      if (shouldCheck) {
        hideFooters()
      }
    })
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
    
    document.body.style.height = 'auto'
    document.documentElement.style.height = 'auto'
    
    return () => {
      if (stars) stars.style.display = ''
      if (stars2) stars2.style.display = ''
      if (stars3) stars3.style.display = ''
      
      observer.disconnect()
      
      const allFooters = document.querySelectorAll('footer')
      allFooters.forEach(f => {
        if (!f.hasAttribute('data-policy-footer')) {
          f.style.display = ''
        }
      })
      
      document.body.style.height = ''
      document.documentElement.style.height = ''
    }
  }, [])
}
