import headerAdmin from "../../components/headerAdmin"

const dashBoard = {
    render() {
        return `
        ${headerAdmin.render()}
        <div class="flex-1 min-w-0 pt-10">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Thống kế
            </h2>

        </div>
        `
    }
}
export default dashBoard