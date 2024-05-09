import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const AcademicsHero = () => {
    return (
        <div className='flex w-full min-h-screen py-24 mt-[114px] bg-slate-900'>
            <Tabs orientation="vertical" defaultValue="account" className="">
                <TabsList className='flex flex-col p-0 w-max h-max'>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
        </div>
    )
}

export default AcademicsHero