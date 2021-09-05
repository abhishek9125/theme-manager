export default {
    down(size) {
        const sizes = {
            xs: '576px',
            sm: '768px',
            md: '992px',
            lg: '1120px'
        }
        return `@media (max-width: ${sizes[size]})`
    }
}