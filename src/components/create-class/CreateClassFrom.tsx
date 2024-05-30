"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CreateStudentFormSchema } from "@/lib/zod/createClassFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../ui/button"
import { useCreateClassMutation } from "@/redux/features/class/createClasApi"

const CreateClassForm = ()=>{

    const form = useForm<z.infer<typeof CreateStudentFormSchema>>({
        resolver: zodResolver(CreateStudentFormSchema),
    })

    const [createClass, {error, data}] = useCreateClassMutation()
    console.log({error, data})

    function onSubmit(data: z.infer<typeof CreateStudentFormSchema>) {
        console.log(data)
        const classInfo = {
            name: data.name
        }
        createClass(classInfo)
    }
    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="full space-y-6">
            {/* <FormHeadingContent title="Student Information"/> */}

            <div className="flex  gap-x-5">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Class Name</FormLabel>

                        <FormControl>
                            <Input placeholder="Type class name.." {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <div className="relative"> 
                <Button type="submit" className="absolute bottom-0">Submit</Button>
            </div>
            </div>

        </form>
    </Form>
    )
}

export default CreateClassForm