const elements = document.querySelectorAll(".animate");
const elementsWithoutOpacity = document.querySelectorAll(".animate-without-opacity");
const sequenceCounters = {}; // Хранит задержки между элементами внутри группы

const observer = new IntersectionObserver((entries, observer) => {
    const defaultDelay = 200
    let currentDelay
    let currentGroup
    let delayBetween

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const isSequential = el.hasAttribute("data-sequence");

            const group = el.getAttribute("data-group") || "default";
            const dataGroupDelay = el.getAttribute('data-group-delay')

            if(dataGroupDelay){
                currentDelay = parseInt(dataGroupDelay)
                currentGroup = group

                delayBetween = currentDelay
            }

            if(group === currentGroup)
                delayBetween = currentDelay
            else
                delayBetween = defaultDelay

            if (!sequenceCounters[group]) {
                sequenceCounters[group] = 0;
            }

            setTimeout(() => {
                el.classList.add("visible");
            }, sequenceCounters[group]);

            if (isSequential) {
                sequenceCounters[group] += delayBetween;
            }

            observer.unobserve(el);
        }
    });

}, { threshold: 0.3 });

elements.forEach(el => observer.observe(el));
elementsWithoutOpacity.forEach(el => observer.observe(el));
