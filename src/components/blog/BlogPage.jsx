import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

const BlogPage = () => {
    return (
        <div className='h-max mt-[130px] px-[5%] pb-24'>
            <div className='flex flex-col gap-8 pt-12'>
                <div className='flex flex-wrap items-center justify-between w-full'>
                    <h5 className='heading'>Blog Titles</h5>
                    <p className='mt-8 font-merriwether text-neutral-400 md:mt-0'>~ Author Name, कक्षा १</p>
                </div>
                <div className='flex flex-col gap-4 tracking-wide font-manrope text-neutral-700 text-lg/[200%]'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed leo id massa semper consequat at tristique lorem. Cras sollicitudin ligula quam, et consectetur erat condimentum non. Etiam vitae viverra ligula. Aenean non maximus nibh. Nulla sit amet sem id ex mattis mollis sed malesuada tortor. Praesent ante ante, gravida vel commodo iaculis, consequat faucibus libero. Nam efficitur, augue nec ultricies ornare, sem sem ullamcorper mi, eget aliquam elit mi et libero. Duis placerat vulputate nibh ut varius. Nulla placerat pretium rhoncus.</p>
                    <p>Morbi a semper libero. Sed vel lacus mollis, tincidunt elit at, placerat lorem. Integer pellentesque ultricies ipsum sed fermentum. Cras in ullamcorper mi. Cras ornare, ligula in mattis commodo, justo orci porttitor nulla, pulvinar ornare ante nisl rhoncus dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus blandit condimentum libero eu interdum. Integer ultrices lorem id aliquet feugiat. Donec vitae nulla malesuada, maximus nunc sed, dictum neque.</p>
                    <p>Vivamus ut ligula nisl. Fusce congue mollis risus quis accumsan. Curabitur pulvinar nec ante sed scelerisque. Phasellus sagittis sem lacus, sit amet convallis lorem varius quis. Nullam consectetur, orci id rutrum imperdiet, justo quam efficitur quam, viverra ultrices ex ipsum ultrices metus. Morbi sit amet varius justo. In eget venenatis justo. Nunc euismod metus ac velit porttitor, sit amet semper leo vulputate. Maecenas sit amet tortor quis metus gravida suscipit. Etiam sed nulla ante. Cras molestie tempor viverra.</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPage