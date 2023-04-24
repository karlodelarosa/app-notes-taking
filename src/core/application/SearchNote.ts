import * as _ from 'lodash'

export default class SearchNote {
    protected keyword = ''
    protected label: any
    protected allData: any

    setKeyword(keyword: string) {
        this.keyword = keyword
        return this
    }

    setLabel(label: any) {
        this.label = label
        return this
    }

    setAllData(allData: any) {
        this.allData = allData
        return this
    }

    filter() {
        const keywords = this.keyword
        const label = this.label
        const allData = this.allData

        const filtered = allData.map((data: any, key: any) => {
            const title = data.title.toLowerCase()
            const content = data.content.toLowerCase()
            
            const keywordsMatched = title.includes(keywords.toLowerCase()) || content.includes(keywords.toLowerCase())

            if (keywordsMatched) {
                return allData[key]
            }

            // const labelFromData = _.get(data, 'labels')
            // labelFromData.map((result: any) => {
            //     if (label.includes(result.label_id)) {
            //         // console.info(key)
            //     }
            // })
            
            // if (categoryId === 'all') {
            //     if (keywordsMatched) {
            //         return articles[key]
            //     }
            // } else {
            //     if (categoryMatched && keywordsMatched) {
            //         return articles[key]
            //     }
            // }

            return null
        }).filter(Boolean)

        // console.info(filtered)
        return filtered
    }
}