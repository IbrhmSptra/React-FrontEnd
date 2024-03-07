

const DownArrowBtn = () => {

    return (
        <div class="flex justify-center flex-col items-center bottom-9 absolute">
            <p class="text-[36px] font-semibold">Mulai Sekarang</p>
            <a href="#auth"
                class="rounded-full flex justify-center items-center w-[50px] h-[50px] bg-[#000000] animate-bouncing mt-3 p-2">
                <i class="fa-solid fa-arrow-down text-primary text-[30px]"></i>
            </a>
        </div>
    )
}

export default DownArrowBtn
