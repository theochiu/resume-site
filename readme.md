# Jekyll Resume Website

I created this website with some inspiration from a portfolio website I saw on [themeforest](https://themeforest.net/user/truethemes/portfolio).
Something I wanted to do was to set everything to variables inside 
jekyll so I wouldn't have to edit html everytime my resume changes. 

Clone this repository and change the variables in `_config.yml` to create your own!

## Preview

![Preview](preview.png "Preview")

[Live Preview](https://theochiu.github.io/resume-site/michael/)

## Installation & Setup
 1. [install Jekyll](https://jekyllrb.com/docs/installation/)
 2. change config variables in `config.yml`
 3. run `bundle exec jekyll serve`

If you've followed these directions correctly, the html should render on its own. For the lists, you can add items
almost endlessly, the templating engine is intelligent enough to move things around. It is __essential__ that you 
follow yaml syntax as violations will result in a build fail. Don't forget commas between list items and quotes around
list items with commas (so that the comma is ignored). 
