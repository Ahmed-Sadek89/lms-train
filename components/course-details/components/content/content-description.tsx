import useSanitizeFromXSS from '@/hooks/use-sanitize-from-XSS'

const dangerousHtmlTesting = `
<p onclick="console.log('sadek')">
    <p >
        It gives you a huge self-satisfaction when you look at your work and say, "I made this!". I love that feeling after I'm done working on something. When I lean back in my chair, look at the final result with a smile, and have this little "spark joy" moment. It's especially satisfying when I know I just made $5,000.
    </p>
    <p>
        I do! And that's why I got into this field. Not for the love of Web Design, which I do now. But for the lifestyle! There are many ways one can achieve this lifestyle. This is my way. This is how I achieved a lifestyle I've been fantasizing about for five years, and I'm going to teach you the same.
    </p>
    <p>
        Often people think Web Design is complicated. That it needs some creative talent or knack for computers. Sure, a lot of people make it very complicated. People make the simplest things complicated, like most subjects taught in universities.
    </p>
    <p>
        But I don't like complicated. I like easy. I like life hacks. I like to take the shortest and simplest route to my destination. I haven't gone to an art school or have a computer science degree. I'm an outsider to this field who hacked himself into it, somehow ending up being a sought-after professional.
    </p>
    <p>
        That's how I'm going to teach you Web Design:
    </p>
    <ul>
        <li>Keep things simple and fun.</li>
        <li>Avoid needless complexity.</li>
        <li>Stay motivated throughout the learning process.</li>
        <li>Become a freelance web designer in a short time.</li>
    </ul>
    <p>
        For example, this is a Design course, but I don't teach you Photoshop because Photoshop is needlessly complicated for Web Design. Instead, I teach Figma, a simple tool that is taking over the design world.
    </p>
    <ul>
        <li>Learn Figma instead of Photoshop.</li>
        <li>Design a complete website within a week.</li>
        <li>Focus on practical skills rather than complex workflows.</li>
    </ul>
    <p>
        Second, this is a Development course. But I don't teach you how to code. Because for Web Design, coding is needlessly complicated and takes too long to learn. Instead, I teach Webflow, a tool that is taking over the web design world.
    </p>
    <ul>
        <li>Build complex websites without coding.</li>
        <li>Learn Webflow efficiently.</li>
        <li>Create professional websites within weeks.</li>
    </ul>
    <p>
        Third, this is a Freelancing course. But I don't just teach you how to write great proposals. I give you a winning proposal template.
    </p>
    <ul style="list-style: bullit">
        <li>Get a proven proposal template.</li>
        <li>Create a stunning portfolio website.</li>
        <li>Build portfolio pieces during the course.</li>
        <li>Prepare yourself for freelance opportunities.</li>
    </ul>
    <p>
        When you're done with the course, you will have a stunning portfolio website with portfolio pieces already in it. Buy this course now and take it whenever the time is right for you.
    </p>
</p>
`

const ContentDescription = () => {
    const sanitizedHtml = useSanitizeFromXSS(dangerousHtmlTesting)

    return (
        <div className='space-y-[20px]'>
            <h4 className='font-heading-4 text-gray-900'>Description</h4>
            <div
                className='text-gray-700 font-body-medium-400'
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
            />
        </div>
    );
}

export default ContentDescription