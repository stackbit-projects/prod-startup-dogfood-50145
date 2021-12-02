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
    colors: colors-h
    title: Featured
    subtitle: Featured blog posts section example
    actions:
      - type: Button
        label: View All
        altText: View All Posts
        url: /blog
        style: primary
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
    showDate: false
    showAuthor: false
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
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    type: FeaturedPostsSection
  - colors: colors-a
    elementId: ''
    title: Gallery
    subtitle: This is the subtitle
    images:
      - type: ImageBlock
        url: 'https://assets.stackbit.com/components/images/default/image-1.jpeg'
        altText: Image one
        caption: Image one caption
      - type: ImageBlock
        url: 'https://assets.stackbit.com/components/images/default/image-2.jpeg'
        altText: Image two
        caption: Image two caption
      - type: ImageBlock
        url: 'https://assets.stackbit.com/components/images/default/image-3.jpeg'
        altText: Image three
        caption: Image three caption
      - type: ImageBlock
        url: 'https://assets.stackbit.com/components/images/default/image-4.jpeg'
        altText: Image four
        caption: Image four caption
    spacing: 1
    columns: 2
    aspectRatio: '1:1'
    imageSizePx: 300
    showCaption: true
    enableHover: true
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
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
    type: MediaGallerySection
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
---
