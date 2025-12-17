let faqItems = document.querySelectorAll('.faq__item')

faqItems.forEach((faqItem, faqIndex) => {
    faqItem.addEventListener('click', () => {
        let desc = document.querySelectorAll('.faq__item-description')
        let svg = document.querySelectorAll('.faq__item-icon')

        desc.forEach((descItem, descIndex) => {
            if(faqIndex === descIndex)
                descItem.classList.toggle('show')
            else
                descItem.classList.remove('show')
        })

        svg.forEach((svgItem, svgIndex) => {
            if(faqIndex === svgIndex)
                svgItem.classList.toggle('rotate')
            else
                svgItem.classList.remove('rotate')
        })
    })
})