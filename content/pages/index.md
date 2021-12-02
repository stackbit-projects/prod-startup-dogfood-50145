---
title: Home
layout: PageLayout
sections:
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-c
    title: I'm Rodik Hanukaev
    text: "I'm a Software Engineer, helping build\_[stackbit.com](https://www.stackbit.com/). I occasionally work on other things, and in rare occasions, write about stuff.\n\nThis is where I keep some of my experimentes and projects.\n"
    actions:
      - altText: Linkedin
        url: 'https://www.linkedin.com/in/rodikh/'
        showIcon: true
        icon: linkedin
        iconPosition: right
        elementId: ''
        type: Link
      - altText: Twitter
        url: 'https://twitter.com/rodiktries'
        showIcon: true
        icon: twitter
        iconPosition: right
        elementId: ''
        type: Link
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-11
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - elementId: ''
    variant: variant-b
    colors: colors-a
    posts:
      - content/pages/blog/post-four.md
      - content/pages/blog/post-three.md
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    type: FeaturedPostsSection
  - elementId: ''
    colors: colors-a
    testimonials:
      - quote: >
          ## Such a great experience to be using this product. It really helped
          with what I needed help with.
        name: Carla Rogers
        title: Happy customer
        image:
          type: ImageBlock
          url: /images/carla.jpg
          altText: Photo of Isabelle Parks
        styles:
          self:
            margin:
              - mt-0
              - mb-0
            flexDirection: row-reverse
          quote:
            textAlign: left
          name:
            textAlign: left
          title:
            textAlign: left
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
    type: TestimonialsSection
---
