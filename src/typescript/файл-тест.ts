// Файл для тестирования TypeScript
// TypeScript test file

interface 测试接口 {
    name: string;
    value: number;
}

interface ТестИнтерфейс {
    имя: string;
    значение: number;
}

export function 测试函数(data: 测试接口): ТестИнтерфейс {
    return {
        имя: data.name,
        значение: data.value
    };
}

export function тестФункция(data: ТестИнтерфейс): 测试接口 {
    return {
        name: data.имя,
        value: data.значение
    };
}