import headerAdmin from "../../../components/headerAdmin"
import data from "../../../data"

const indexNews = {
        render() {
            return /*html*/ `
        ${headerAdmin.render()}
        
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    STT
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Desc
                                </th>

                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            ${data.map((post) => /*html*/`
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    ${post.id}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    ${post.title}
                                </td>
                                <td class="px-6 py-4 ">
                                    ${post.desc}
                                </td>

                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                </td>
                            </tr>`)
                        }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    `
    }
}

export default indexNews