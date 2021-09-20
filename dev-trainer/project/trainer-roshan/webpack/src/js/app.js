import template from './template.pug'

const el = document.getElementById('root')

$(el).html(template({
    content: 'hi i am sharad kafle',
    color: 'red',
}))