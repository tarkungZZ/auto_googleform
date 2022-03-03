const puppeteer = require('puppeteer')
const config = require('../helpers/config')

module.exports = async () => {

    await autoForm()

    async function autoForm() {

        try {

            let section = 0

            const browser = await puppeteer.launch({
                defaultViewport: null,
                headless: false,
                executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                args: [
                    '--user-data-dir=C:\\Users\\Fram.PK\\AppData\\Local\\Google\\Chrome\\User Data',
                    '--profile-directory=Profile 25'
                ]
            })

            const page = (await browser.pages())[0]

            await page.goto(config.link_1, { waitUntil: 'networkidle0' })

            /////// section 1 ////////

            const check_first_field = await page.$eval('#i1', el => el.textContent)

            console.log(`check 1st`, check_first_field)

            if (check_first_field === 'พื้นที่ *') {

                for (let i = 3; i < 5; i++) {

                    const check_location = await page.$eval(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(1) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div:nth-child(${i}) > span`, el => el.textContent)

                    if (check_location === 'UPC (ต่างจังหวัด)') {

                        await page.click('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(1) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div.MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R')

                        for (let x = 0; x < i; x++) {

                            await page.keyboard.press('ArrowDown')

                            await delay(50)
                        }

                        await page.keyboard.press('Enter')

                        section++

                        break

                    }

                }

            } else if (check_first_field === 'บริษัท *') {

                for (let i = 3; i < 26; i++) {

                    const check_company = await page.$eval(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(1) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div:nth-child(${i}) > span`, el => el.textContent)

                    if (check_company === 'หจก.เอ็มเอ็ม นิวส์ ทรานสปอร์ต') {

                        await page.click('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(1) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div.MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R')

                        for (let x = 0; x < i; x++) {

                            await page.keyboard.press('ArrowDown')

                            await delay(50)

                        }

                        await page.keyboard.press('Enter')

                        section++

                        break

                    }

                }

            } else if (check_first_field === 'เบอร์โทรศัพท์ *') {

                await page.type('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(1) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input', config.phone)

                section++

            } else if (check_first_field === 'ทะเบียนรถ *') {

                await page.type('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(1) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input', config.license)

                section++

            } else if (check_first_field === 'ชื่อพนักงานขับรถ') {

                await page.type('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(1) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input', config.driver_name)

                section++

            }

            await delay(500)

            ////// section 2 //////

            const check_2nd_field = await page.$eval('#i5', el => el.textContent)

            console.log(`check 2nd`, check_2nd_field)

            if (check_2nd_field === 'พื้นที่ *') {

                for (let i = 3; i < 5; i++) {

                    const check_location = await page.$eval(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(2) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div:nth-child(${i}) > span`, el => el.textContent)

                    if (check_location === 'UPC (ต่างจังหวัด)') {

                        await page.click('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(2) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div.MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R')

                        for (let x = 0; x < i; x++) {

                            await page.keyboard.press('ArrowDown')

                            await delay(50)
                        }

                        await page.keyboard.press('Enter')

                        section++

                        break

                    }

                }

            } else if (check_2nd_field === 'บริษัท *') {

                for (let i = 3; i < 26; i++) {

                    const check_company = await page.$eval(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(2) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div:nth-child(${i}) > span`, el => el.textContent)

                    if (check_company === 'หจก.เอ็มเอ็ม นิวส์ ทรานสปอร์ต') {

                        await page.click('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(2) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div.MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R')

                        for (let x = 0; x < i; x++) {

                            await page.keyboard.press('ArrowDown')

                            await delay(50)

                        }

                        await page.keyboard.press('Enter')

                        section++

                        break

                    }

                }

            } else if (check_2nd_field === 'เบอร์โทรศัพท์ *') {

                await page.type('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(2) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input', config.phone)

                section++

            } else if (check_2nd_field === 'ทะเบียนรถ *') {

                await page.type('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(2) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input', config.license)

                section++

            } else if (check_2nd_field === 'ชื่อพนักงานขับรถ') {

                await page.type('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(2) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input', config.driver_name)

                section++

            }

            await delay(500)

            // ////// section 3 //////

            const check_3rd_field = await page.$eval('#i9', el => el.textContent)

            console.log(`check 3rd`, check_3rd_field)

            if (check_3rd_field === 'พื้นที่ *') {

                for (let i = 3; i < 5; i++) {

                    const check_location = await page.$eval(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(3) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div:nth-child(${i}) > span`, el => el.textContent)

                    if (check_location === 'UPC (ต่างจังหวัด)') {

                        await page.click('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(3) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div.MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R')

                        for (let x = 0; x < i; x++) {

                            await page.keyboard.press('ArrowDown')

                            await delay(50)
                        }

                        await page.keyboard.press('Enter')

                        section++

                        break

                    }

                }

            } else if (check_3rd_field === 'บริษัท *') {

                for (let i = 3; i < 26; i++) {

                    const check_company = await page.$eval(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(3) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div:nth-child(${i}) > span`, el => el.textContent)

                    if (check_company === 'หจก.เอ็มเอ็ม นิวส์ ทรานสปอร์ต') {

                        await page.click('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(3) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div.MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R')

                        for (let x = 0; x < i; x++) {

                            await page.keyboard.press('ArrowDown')

                            await delay(50)

                        }

                        await page.keyboard.press('Enter')

                        section++

                        break

                    }

                }

            } else if (check_3rd_field === 'เบอร์โทรศัพท์ *') {

                await page.type('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(3) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input', config.phone)

                section++

            } else if (check_3rd_field === 'ทะเบียนรถ *') {

                await page.type('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(3) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input', config.license)

                section++

            } else if (check_3rd_field === 'ชื่อพนักงานขับรถ') {

                await page.type('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(3) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input', config.driver_name)

                section++

            }

            await delay(500)

            // ////// section 4 //////

            const check_4th_field = await page.$eval('#i13', el => el.textContent)

            console.log(`check 4th`, check_4th_field)

            if (check_4th_field === 'พื้นที่ *') {

                for (let i = 3; i < 5; i++) {

                    const check_location = await page.$eval(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(4) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div:nth-child(${i}) > span`, el => el.textContent)

                    if (check_location === 'UPC (ต่างจังหวัด)') {

                        await page.click('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(4) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div.MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R')

                        for (let x = 0; x < i; x++) {

                            await page.keyboard.press('ArrowDown')

                            await delay(50)
                        }

                        await page.keyboard.press('Enter')

                        section++

                        break

                    }

                }

            } else if (check_4th_field === 'บริษัท *') {

                for (let i = 3; i < 26; i++) {

                    const check_company = await page.$eval(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(4) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div:nth-child(${i}) > span`, el => el.textContent)

                    if (check_company === 'หจก.เอ็มเอ็ม นิวส์ ทรานสปอร์ต') {

                        await page.click('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(4) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div.MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R')

                        for (let x = 0; x < i; x++) {

                            await page.keyboard.press('ArrowDown')

                            await delay(50)

                        }

                        await page.keyboard.press('Enter')

                        section++

                        break

                    }

                }

            } else if (check_4th_field === 'เบอร์โทรศัพท์ *') {

                await page.type('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(4) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input', config.phone)

                section++

            } else if (check_4th_field === 'ทะเบียนรถ *') {

                await page.type('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(4) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input', config.license)

                section++

            } else if (check_4th_field === 'ชื่อพนักงานขับรถ') {

                await page.type('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(4) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input', config.driver_name)

                section++

            }

            await delay(500)

            // ////// section 5 //////

            const check_5th_field = await page.$eval('#i17', el => el.textContent)

            console.log(`check 5th`, check_5th_field)

            if (check_5th_field === 'พื้นที่ *') {

                for (let i = 3; i < 5; i++) {

                    const check_location = await page.$eval(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(5) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div:nth-child(${i}) > span`, el => el.textContent)

                    if (check_location === 'UPC (ต่างจังหวัด)') {

                        await page.click('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(5) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div.MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R')

                        for (let x = 0; x < i; x++) {

                            await page.keyboard.press('ArrowDown')

                            await delay(50)
                        }

                        await page.keyboard.press('Enter')

                        section++

                        break

                    }

                }

            } else if (check_5th_field === 'บริษัท *') {

                for (let i = 3; i < 26; i++) {

                    const check_company = await page.$eval(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(5) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div:nth-child(${i}) > span`, el => el.textContent)

                    if (check_company === 'หจก.เอ็มเอ็ม นิวส์ ทรานสปอร์ต') {

                        await page.click('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(5) > div > div > div.vQES8d > div > div:nth-child(1) > div.ry3kXd > div.MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R')

                        for (let x = 0; x < i; x++) {

                            await page.keyboard.press('ArrowDown')

                            await delay(50)

                        }

                        await page.keyboard.press('Enter')

                        section++

                        break

                    }

                }

            } else if (check_5th_field === 'เบอร์โทรศัพท์ *') {

                await page.type('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(5) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input', config.phone)

                section++

            } else if (check_5th_field === 'ทะเบียนรถ *') {

                await page.type('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(5) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input', config.license)

                section++

            } else if (check_5th_field === 'ชื่อพนักงานขับรถ') {

                await page.type('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(5) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input', config.driver_name)

                section++

            }

            await delay(500)

            ////// submit //////

            console.log(`section`, section)

            if (section === 5) {

                await page.click('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div.DE3NNc.CekdCb > div.lRwqcd > div')

            }

            await delay(1000)

            console.log('All done.')

            await delay(3000)

            await browser.close()

        } catch (err) {

            console.log(err)

        }

    }

    function delay(time) {

        return new Promise(function (resolve) {

            setTimeout(resolve, time)

        })

    }

}