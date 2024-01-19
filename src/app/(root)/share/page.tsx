import { Input, Textarea } from '@nextui-org/input'
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Button } from "@nextui-org/button"
export default function Page() {
    const animals = [
        { label: "Cat", value: "cat", description: "The second most popular pet in the world" },
        { label: "Dog", value: "dog", description: "The most popular pet in the world" },
    ]

    return (
        <div className="w-full h-full">
            <div className="bg-background h-fit">
                <header className="mb-12">
                    <h1 className="text-6xl font-bold dark:text-gray-500">分享创造</h1>
                    <div className="mt-3 flex items-center space-x-2">
                        <span className="px-3 py-1 bg-primary-500 text-black rounded-full">v1</span>
                        <p className="text-2xl dark:text-gray-500">每一次的分享都会成为一个伟大产品的开端</p>
                    </div>
                </header>
                <main className="flex justify-center">
                    <Card className="w-[600px]">
                        <CardBody>
                            <form>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Input labelPlacement="outside" color="secondary" label="名称" placeholder="Example Value" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        
                                    </div>
                                    <div className="flex flex-col space-y-1.5 col-span-2">
                                        <Input
                                            type="url"
                                            label="链接"
                                            color="secondary"
                                            placeholder="nextui.org"
                                            labelPlacement="outside"
                                            startContent={
                                                <div className="pointer-events-none flex items-center">
                                                    <span className="text-default-400 text-small">https://</span>
                                                </div>
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1.5 col-span-2">
                                        <Input label="简介" color='secondary' labelPlacement="outside" placeholder="Example Value" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5 col-span-2">
                                        <Textarea label="网站介绍" color='secondary' labelPlacement="outside" placeholder="Example Value" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5 col-span-2">
                                        <p className="text-red-500 text-sm mt-1">Please select one option</p>
                                    </div>
                                </div>
                            </form>
                        </CardBody>
                        <CardFooter className="flex justify-end">
                            <Button color='secondary'>提交</Button>
                        </CardFooter>
                    </Card>
                </main>
            </div>

        </div>
    )
}